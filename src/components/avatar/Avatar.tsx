import React from 'react'
import {getSizeClass} from "./_utils/size.tsx";
import {
    getVariantOutlineColor,
    getVariantSoftColor,
    getVariantSolidColor, getVariantWhiteColor
} from "./_utils/variant.tsx";
import {getShapeClass} from "./_utils/shape.tsx";
import {getStatusClass, getStatusPosition, getStatusSizeClass} from "./_utils/status.tsx";

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
     * Set the avatar variant, it works when the placeholder is 'label', default value is 'solid'.
     */
    variantStyle?: 'solid' | 'soft' | 'outline' | 'white';

    /**
     * List of variant color.
     * <br>
     * Solid : 'dark' | 'light' | 'green' | 'blue' | 'red' | 'yellow' | 'white',
     * <br>
     * Soft : 'dark' | 'light' | 'green' | 'blue' | 'red' | 'yellow',
     * <br>
     * Outline : 'dark' | 'light' | 'green' | 'blue' | 'red' | 'yellow',
     * <br>
     * White : just border gray, background white and text color black
     */
    variantColor?: 'dark' | 'light' | 'green' | 'blue' | 'red' | 'yellow' | 'white';

    /**
     * Placeholder type for the avatar. Can be 'label' or 'icon'.
     */
    placeholder?: 'label' | 'icon';

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
     * Srcset of image avatar.
     */
    srcSet?: string;

    /**
     * Icon to be used in the avatar when the placeholder is 'icon'.
     */
    icon?: React.ReactNode;

    /**
     * Custom styles for the avatar.
     */
    style?: React.CSSProperties;

    /**
     * Label letter or character to be displayed when there's no image or icon.
     */
    label?: string;

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

const getInitialValue = (value:string,numbChar:number=1) => {
    if (!!value){
        return value.substring(0, numbChar);
    }

};

/**
 * Primary UI component for user interaction
 */
export const Avatar: React.FC<AvatarProps> = ({
    shape = 'circular',
    size = 'default',
    placeholder = "label",
    label = "A",
    status = 'none',
    statusPlacement = 'top-right',
    variantStyle = 'solid',
    variantColor = 'blue',
    // className,className
    srcSet,
    alt,
  }) => {
    const variantClass = (variantStyle:string, variantColor:string, placeholder:string) => {
        if (placeholder==='label'){
            switch (variantStyle) {
                case("white"):
                    return `inline-flex items-center justify-center font-semibold leading-none ${getVariantWhiteColor()}`;
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
                      placeholder === 'label' && label ?
                          getInitialValue(label,2)
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