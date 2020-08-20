import React from 'react';
import _ from 'lodash';

import {Link, classNames} from '../utils';

export default class Connect extends React.Component {
    render() {
        return (
            <div>
            <section id={"connect"} >
                <div className="inner">
                    {_.get(this.props, 'action') &&
                    <ul className="socials">
                        {_.map(_.get(this.props, 'action'), (action, action_idx) => (
                            <li key={action_idx}><Link target="_blank" to={_.get(action, 'url')} className={classNames('button')}>{_.get(action, 'label')}</Link></li>
                        ))}
                    </ul>
                    }
                </div>
            </section>
            </div>
        );
    }
}
