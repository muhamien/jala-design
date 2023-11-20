const getSizeClass = (size:string) => {
    switch (size) {
        case("xs"):
            return "h-8 w-8 text-xs font-semibold text-white";
        case("sm"):
            return "h-[2.375rem] w-[2.375rem] text-sm font-semibold text-white";
        case("xl"):
            return "h-[3.875rem] w-[3.875rem] text-lg font-semibold text-white";
        default:
            return "h-[2.875rem] w-[2.875rem] font-semibold text-white";
    }
};

export {getSizeClass};