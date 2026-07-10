const DEFAULT_GRACE_DAYS = 0;

/*
 Version 1

 Returns the number of grace days.

 Later this will read from the
 Settings Engine.

*/

export function getGracePeriodDays() {
  return DEFAULT_GRACE_DAYS;
}

export function getGraceDeadline(dueDate) {

  const deadline = new Date(dueDate);

  deadline.setDate(
    deadline.getDate() + getGracePeriodDays()
  );

  return deadline;
}