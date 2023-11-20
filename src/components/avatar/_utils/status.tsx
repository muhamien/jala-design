const getStatusSizeClass = (size:string) => {
    switch (size) {
        case("xs"):
            return "h-1.5 w-1.5";
        case("sm"):
            return "h-2.5 w-2.5";
        case("xl"):
            return "h-3.5 w-3.5";
        default:
            return "h-3 w-3";
    }
};
const getStatusClass = (status:string) => {
    switch (status) {
        case("online"):
            return "bg-teal-400";
        case("dnd"):
            return "bg-red-400";
        case("offline"):
            return "bg-gray-400";
        case("away"):
            return "bg-yellow-400";
        default:
            return "bg-gray-400";
    }
}

const getStatusPosition = (statusPlacement:string,shape:string) => {
    switch (statusPlacement) {
        case("top-right"):
            return `top-0 right-0 ${shape==='rounded'&&'transform -translate-y-1/2 translate-x-1/2'}`;
        default:
            // Bottom right
            return `bottom-0 end-0 ${shape==='rounded'&&'transform translate-y-1/2 translate-x-1/2'}`;
    }
};

export {getStatusSizeClass,getStatusClass,getStatusPosition};