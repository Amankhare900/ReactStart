const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
})

export default currencyFormatter;