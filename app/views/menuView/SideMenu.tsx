import * as React from 'react';
import * as css from '../../themes/menu.scss';

/**
 * TODO.
 */
export class SideMenu extends React.PureComponent {

    /**
     * Component render method.
     */
    public render(): React.ReactNode {
        return (
            <div className={css.menuContainer}>
                <div className={css.start}>
                    <div className={css.active}/>
                </div>
                <div className={css.webApps}/>
            </div>
        );
    }
}
