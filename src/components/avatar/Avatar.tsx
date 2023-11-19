import React from 'react'
import './avatar.css';
import classNames from "classnames";
import clsx from "clsx";

interface AvatarProps {
    /**
     * Specifies the size of the avatar.
     */
    size: 'xs' | 'sm' | 'default' | 'xl';

    /**
     * Defines the shape of the avatar.
     */
    shape?: 'circular' | 'rounded';

    /**
     * Set the avatar variant, it works when the placeholder is 'initial', default value is 'solid'.
     */
    variantStyle?: 'solid' | 'soft' | 'outline' | 'white';

    /**
     * List of variant color.
     * Solid : 'dark' | 'light' | 'green' | 'blue' | 'red' | 'yellow' | 'white'
     * soft : 'dark' | 'light' | 'green' | 'blue' | 'red' | 'yellow'
     * outline : 'dark' | 'light' | 'green' | 'blue' | 'red' | 'yellow'
     * white : just border gray, background white and text color black
     */
    variantColor?: 'dark' | 'light' | 'green' | 'blue' | 'red' | 'yellow' | 'white';

    /**
     * Placeholder type for the avatar. Can be 'initial' or 'icon'.
     */
    placeholder?: 'initial' | 'icon';

    /**
     * Set outline color with Tailwind CSS color pallet, e.g., 'blue-800', 'red-500', etc.
     */
    outline?: string;

    /**
     * Specifies whether the avatar has a status indicator. Default is `false`.
     */
    status?: 'online' | 'dnd' | 'away' | 'offline' | 'none';

    /**
     * Set the status indicator position. Default is 'top-right'.
     */
    statusPlacement?: 'top-right' | 'bottom-right';

    /**
     * Gap between the avatar and its status indicator.
     */
    gap?: number;

    /**
     * Srcset of image avatar.
     */
    srcSet?: string;

    /**
     * Initial name to be displayed when there's no image or icon.
     */
    initialName?: string;

    /**
     * Icon to be used in the avatar when the placeholder is 'icon'.
     */
    icon?: React.ReactNode;

    /**
     * Custom styles for the avatar.
     */
    style?: React.CSSProperties;

    /**
     * Initial letter or character to be displayed when there's no image or icon.
     */
    initial?: string;

    /**
     * Additional class names for styling.
     */
    className?: string;

    /**
     * Alternative text for the avatar image.
     */
    alt?: string;

    /**
     * Callback function triggered on avatar click.
     */
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

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
            return "border border-yellow-500 text-yellow-500/30 dark:text-yellow-500";
        case("white"):
            return "border border-white text-white";
        default:
            return;
    }
};
const getVariantWhiteColor = () => {
    return "border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white";
};
const getShapeClass = (shape:string) => {
    return shape === 'circular' ? 'rounded-full' : 'rounded-lg'
};

/**
 * Primary UI component for user interaction
 */
export const Avatar: React.FC<AvatarProps> = ({
    shape = 'circular',
    size = 'default',
    // initialName = 'avatar',
    placeholder = "initial",
    initial = "A",
    status = 'none',
    statusPlacement = 'top-right',
    variantStyle = 'solid',
    variantColor = 'blue',
    // className,
    srcSet,
    alt,
  }) => {
    const variantClass = (variantStyle:string, variantColor:string, placeholder:string) => {
        if (placeholder==='initial'){
            switch (variantStyle) {
                case("white"):
                    return `inline-flex items-center justify-center font-semibold leading-none ${getVariantWhiteColor}`;
                case("outline"):
                    return `inline-flex items-center justify-center font-semibold leading-none ${getVariantOutlineColor(variantColor)}`;
                case("soft"):
                    return `inline-flex items-center justify-center font-semibold leading-none ${getVariantSoftColor(variantColor)}`;
                case("solid"):
                    return `inline-flex items-center justify-center font-semibold leading-none ${getVariantSolidColor(variantColor)}`;
                default:
                    return;
            }
        } else {
            return `inline-block bg-gray-100 rounded-full overflow-hidden`;
        }
    }
    if (srcSet) {
        return (
            <div className="relative inline-block">
                <img src={srcSet} alt={alt} className={`inline-block ${getShapeClass(shape)} ${getSizeClass(size)}}`} />
                {status !== 'none' && <span className={`absolute ${getStatusPosition(statusPlacement,shape)} block ${getStatusSizeClass(size)} rounded-full ring-2 ring-white ${getStatusClass(status)}`}></span>}
            </div>
        );
    } else {
        return (
            <div className="relative inline-block">
                <span className={`${variantClass(variantStyle,variantColor,placeholder)} ${getSizeClass(size)}} ${getShapeClass(shape)}`}>
                  {
                      placeholder === 'initial' && initial ?
                          initial
                      :
                          <svg className="h-full w-full text-gray-300" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.62854" y="0.359985" width="15" height="15" rx="7.5" fill="white"/>
                            <path d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z" fill="currentColor"/>
                            <path d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z" fill="currentColor"/>
                          </svg>
                  }
                    {status !== 'none' && <span className={`absolute ${getStatusPosition(statusPlacement,shape)} block ${getStatusSizeClass(size)} rounded-full ring-2 ring-white ${getStatusClass(status)}`}></span>}
                </span>
            </div>
        );
    }
};