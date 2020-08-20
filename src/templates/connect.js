import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import Connect from '../components/Connect'

export default class Call extends React.Component {
    render() {
        return (
            <div>
            <Layout {...this.props}>
                <div id="wrapper">
                    <section id="main" className="wrapper">
                        <div className="inner">
                            {_.get(this.props, 'pageContext.frontmatter.title') &&
                            <h1 className="major">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>}
                            {_.map(this.props.pageContext.frontmatter.socials, (action, section_idx) => {
                                let ConnectComponent = Connect
                                return (
                                    <ConnectComponent key={section_idx} {...this.props} action={action} site={this.props.pageContext.site} page={this.props.pageContext} />
                                )
                            })}
                        </div>
                    </section>
                </div>
            </Layout>
            </div>
        );
    }
}
