import { useEffect, useState } from "react";

import PropertyModal from "../components/PropertyModal";
import PropertyTable from "../components/PropertyTable";

import {
  loadProperties,
  saveProperties,
  createProperty,
} from "../features/properties/propertyStore";

function Properties() {
  const [properties, setProperties] = useState(loadProperties);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    saveProperties(properties);
  }, [properties]);

  function addProperty(data) {
    const property = createProperty(data, properties.length);

    setProperties([...properties, property]);

    setOpen(false);
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Properties</h1>
          <p>Manage all properties.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setOpen(true)}
        >
          + Add Property
        </button>
      </div>

      <PropertyTable properties={properties} />

      <PropertyModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={addProperty}
      />
    </>
  );
}

export default Properties;