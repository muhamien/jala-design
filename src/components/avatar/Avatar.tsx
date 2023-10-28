import './avatar.css';

interface AvatarProps {
    /**
    * set avatar shape
    */
    shape: 'rounded' | 'circle';
    /**
    * How large should the avatar be?
    */
    size?: 'xs' | 'sm' | 'default' | 'xl';
}

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({
    shape = 'rounded',
    size = 'default',
    ...props
  }: AvatarProps) => {
  
    return (
      <div
        className={"rounded-full w-auto h-auto bg-jla-base px-4 py-2"}
        {...props}
      >
        A
      </div>
    );
};