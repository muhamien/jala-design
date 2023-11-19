import React from "react";

export interface ConfigProviderProps {
    getTargetContainer?: () => HTMLElement | Window;
    getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
    prefixCls?: string;
    iconPrefixCls?: string;
    children?: React.ReactNode;
    // renderEmpty?: RenderEmptyHandler;
    // csp?: CSPConfig;
    // autoInsertSpaceInButton?: boolean;
    // form?: {
    //     validateMessages?: ValidateMessages;
    //     requiredMark?: RequiredMark;
    //     colon?: boolean;
    // };
    // input?: {
    //     autoComplete?: string;
    // };
    // pagination?: {
    //     showSizeChanger?: boolean;
    // };
    // locale?: Locale;
    // pageHeader?: {
    //     ghost: boolean;
    // };
    // componentSize?: SizeType;
    // componentDisabled?: boolean;
    // direction?: DirectionType;
    // space?: {
    //     size?: SizeType | number;
    // };
    virtual?: boolean;
    dropdownMatchSelectWidth?: boolean;
}

const ConfigProvider: React.FC<ConfigProviderProps> & {
    ConfigContext: typeof ConfigContext;
    SizeContext: typeof SizeContext;
    config: typeof setGlobalConfig;
} = props => {
    React.useEffect(() => {
        if (props.direction) {
            message.config({
                rtl: props.direction === 'rtl',
            });
            notification.config({
                rtl: props.direction === 'rtl',
            });
        }
    }, [props.direction]);

    return (
        <LocaleReceiver>
            {(_, __, legacyLocale) => (
                <ConfigConsumer>
                    {context => (
                        <ProviderChildren parentContext={context} legacyLocale={legacyLocale} {...props} />
                    )}
                </ConfigConsumer>
            )}
        </LocaleReceiver>
    );
};

export default ConfigProvider;