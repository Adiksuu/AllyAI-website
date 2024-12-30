const _upgradeAccount = (isPremium, setIsPremium) => {
    if (isPremium) {
        setIsPremium(false)
    } else {
        setIsPremium(true)
    }
}

export { _upgradeAccount }