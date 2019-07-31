import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class Sidebar extends React.Component {
    render() {
        return (
            <section id="sidebar">
                <div className="inner">
                    <nav>
                        <ul>
                            {_.map(this.props.pageContext.frontmatter.sidebar.entries, (item, item_idx) => (
                                <li key={item_idx}><Link {...(item.is_primary ? {id: 'first_link'} : null)}to={(item.url.startsWith('#') ? item.url : safePrefix(item.url))}>{item.title}</Link></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </section>
        );
    }
}
