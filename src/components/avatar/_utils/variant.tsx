const getVariantSolidColor = (variantColor:string) => {
    switch (variantColor) {
        case("dark"):
            return "bg-gray-800 text-white";
        case("light"):
            return "bg-gray-500 text-white";
        case("green"):
            return "bg-green-500 text-white";
        case("blue"):
            return "bg-blue-600 text-white dark:bg-blue-500";
        case("red"):
            return "bg-red-500 text-white";
        case("yellow"):
            return "bg-yellow-500 text-white";
        case("white"):
            return "bg-white text-gray-800";
        default:
            return;
    }
};
const getVariantSoftColor = (variantColor:string) => {
    switch (variantColor) {
        case("dark"):
            return "bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white";
        case("light"):
            return "bg-gray-50 text-gray-500 dark:bg-white/[.05] dark:text-white";
        case("green"):
            return "bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500";
        case("blue"):
            return "bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500";
        case("red"):
            return "bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500";
        case("yellow"):
            return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500";
        case("white"):
            return "bg-white/[.1] text-white";
        default:
            return;
    }
};
const getVariantOutlineColor = (variantColor:string) => {
    switch (variantColor) {
        case("dark"):
            return "border border-gray-800 text-gray-800 dark:border-gray-200 dark:text-white";
        case("light"):
            return "border border-gray-500 text-gray-500 dark:text-gray-400";
        case("green"):
            return "border border-teal-500 text-teal-500";
        case("blue"):
            return "border border-blue-600 text-blue-600 dark:text-blue-500 dark:text-blue-500";
        case("red"):
            return "border border-red-500 text-red-500";
        case("yellow"):
            return "border border-yellow-500 text-yellow-500 dark:text-yellow-500";
        case("white"):
            return "border border-white text-white";
        default:
            return;
    }
};

const getVariantWhiteColor = () => {
    return "border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white";
};

export {
    getVariantOutlineColor,
    getVariantSoftColor,
    getVariantSolidColor,
    getVariantWhiteColor
};