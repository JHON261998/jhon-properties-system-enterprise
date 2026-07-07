import { loadTenants } from "../features/tenants/tenantStore";
import { loadCharges } from "../features/rentCharges/chargeStore";
import { loadPayments } from "../features/payments/paymentStore";

export function getTenantLedger() {
  const tenants = loadTenants();
  const charges = loadCharges();
  const payments = loadPayments();

  return tenants.map((tenant) => {
    const transactions = [];

    charges
      .filter(
        (charge) =>
          String(charge.tenantId) === String(tenant.id)
      )
      .forEach((charge) => {
        transactions.push({
          date: charge.createdAt,
          type: "Charge",
          reference: charge.code,
          period: charge.period,
          debit: Number(charge.amount),
          credit: 0,
        });
      });

    payments
      .filter(
        (payment) =>
          String(payment.tenantId) === String(tenant.id)
      )
      .forEach((payment) => {
        transactions.push({
          date: payment.createdAt,
          type: "Payment",
          reference: payment.receiptNo,
          period: payment.period,
          debit: 0,
          credit: Number(payment.amount),
        });
      });

    transactions.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    let runningBalance = 0;

    const ledger = transactions.map((transaction) => {
      runningBalance += transaction.debit;
      runningBalance -= transaction.credit;

      return {
        ...transaction,
        balance: runningBalance,
      };
    });

    return {
      tenantId: tenant.id,
      tenant: tenant.fullName,
      transactions: ledger,
      currentBalance: runningBalance,
    };
  });
}