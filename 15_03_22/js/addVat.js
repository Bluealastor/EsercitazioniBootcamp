/**
 * Add a VAT value to a given product price
 * @param {number} value the product price
 * @param {number} vat the VAT to apply
 * @returns {number}
 */
const AddVAT = (value, vat = 22) => {
    const add = (value / 100) * vat;
    const total = value + add;
    return total;
};

// Versione "one-liner"
// const AddVAT = (value, vat = 22) => value + ((value / 100) * vat);