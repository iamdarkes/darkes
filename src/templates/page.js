import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div id="wrapper">
                    <section id="main" className="wrapper">
                        <div className="inner">
                            <h1 className="major">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                            {this.props.pageContext.frontmatter.content_img_path &&
                                <span className="image fit"><img src={safePrefix(this.props.pageContext.frontmatter.content_img_path)} alt="" /></span>
                            }
                            <h5>{"Published "}{_.get(this.props, 'pageContext.frontmatter.date')}</h5>
                            {htmlToReact(_.get(this.props, 'pageContext.html'))}
                        </div>
                    </section>
                </div>
            </Layout>
        );
    }
}
