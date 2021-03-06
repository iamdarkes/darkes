import React from 'react';
import _ from 'lodash';

import {markdownify, Link, htmlToReact} from '../utils';

export default class Contact extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + _.get(this.props, 'section.background_style') + ' fade-up'}>
                <div className="inner">
                    <h2>{_.get(this.props, 'section.title')}</h2>
                    {markdownify(_.get(this.props, 'section.text'))}
                    <div className="style1">
                        <section>
                            <ul className="contact">
                                {_.get(this.props, 'section.contact_list') && 
                                    _.map(_.get(this.props, 'section.contact_list'), (item, item_idx) => (
                                        <li key={item_idx}>
                                            <h3>{_.get(item, 'title')}</h3>
                                            {_.get(item, 'url') ? 
                                                <Link to={_.get(item, 'url')}>{_.get(item, 'text')}</Link>
                                             : 
                                                <span>{htmlToReact(_.get(item, 'text').replace(/\n/g, '<br />'))}</span>
                                            }
                                        </li>
                                    ))
                                }
                                {_.get(this.props, 'section.social') && 
                                    <li>
                                        <h3>{_.get(this.props, 'section.social.title')}</h3>
                                        <ul className="icons">
                                            {_.map(_.get(this.props, 'section.social.social_icons'), (item, item_idx) => (
                                                <li key={item_idx}><Link target="_blank" to={_.get(item, 'url')} className={_.get(item, 'icon')}><span className="label">{_.get(item, 'title')}</span></Link></li>
                                            ))}
                                        </ul>
                                    </li>
                                }
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}
