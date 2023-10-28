import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type: 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'link';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'regular' | 'large';
  /**
   * How large should the button be?
   */
  shape?: 'default' | 'circle' | 'square';
  /**
   * Button contents
   */
  label: string;
  /**
   * Button width in px
   */
  width?: number;
  /**
   * Button icon
   */
  icon?: React.ReactNode;
  /**
   * Button icon position
   */
  iconPlacement?: 'left' | 'top' | 'right' | 'bottom';
  /**
   * Button height in px
   */
  height?: number;
  /**
   * Button disabled
   */
  disabled?: boolean;
  /**
   * Button class
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'primary',
  size = 'regular',
  shape = 'default',
  iconPlacement = 'left',
  disabled = false,
  width = 0,
  height = 0,
  label,
  icon,
  className,
  ...props
}: ButtonProps) => {
  let buttonClass:string = '';

  switch (type) {
    case "link":
      if(!!disabled){
        buttonClass='border border-[#FFFFF000] text-[#004492] cursor-not-allowed';
      } else {
        buttonClass='border border-[#FFFFF000] text-[#1B77DF] hover:text-[#0A6BBD] ease-out duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A6BBD] cursor-pointer';
      }
      break;
    case "secondary":
      if(!!disabled){
        buttonClass='border border-[#8AC1FE] text-[#8AC1FE] cursor-not-allowed';
      } else {
        buttonClass='border border-[#1B77DF] text-[#1B77DF] hover:bg-[#0A6BBD] hover:text-[#FFFFFF] ease-out duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A6BBD] cursor-pointer';
      }
      break;
    case "success":
      if(!!disabled){
        buttonClass='bg-[#78D271] text-white cursor-not-allowed';
      } else {
        buttonClass='bg-[#4CB244] text-white hover:bg-[#379E2F] ease-out duration-300 focus:outline-none focus:ring-2 focus:ring-[#379E2F] cursor-pointer';
      }
      break;
    case "warning":
      if(!!disabled){
        buttonClass='bg-[#FFC978] text-white cursor-not-allowed';
      } else {
        buttonClass='bg-[#FF9D0B] text-white hover:bg-[#EB920D] ease-out duration-300 focus:outline-none focus:ring-2 focus:ring-[#EB920D] cursor-pointer';
      }
      break;
    case "destructive":
      if(!!disabled){
        buttonClass='bg-[#FD919A] text-white cursor-not-allowed';
      } else {
        buttonClass='bg-[#F14250] text-white hover:bg-[#DC1021] ease-out duration-300 focus:outline-none focus:ring-2 focus:ring-[#DC1021] cursor-pointer';
      }
      break;
    default:
      if(!!disabled){
        buttonClass='bg-[#8AC1FE] text-white cursor-not-allowed';
      } else {
        buttonClass='bg-[#1B77DF] text-white hover:bg-[#0A6BBD] ease-out duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A6BBD] cursor-pointer'
      }
      break;  
  }

  return (
    <button
      type="button"
      className={[className, buttonClass, 'btn', `btn-size--${size}`, `btn-shape--${shape}`].join(' ')}
      {...props}
    >
      <div className={['flex gap-[6px] justify-center',`px-[6px]`].join(' ')}>
        {icon && icon}
        {label}
      </div>
    </button>
  );
};
  