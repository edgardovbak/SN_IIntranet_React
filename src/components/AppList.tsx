import * as React				from 'react';

class AppList extends React.Component<any, any> {
    public render() {

		return (
			<div className="applist">
				<a href="#" className="applist__item" title="Don't touch">
                    <img src={require('../images/appLogo.png')} alt="site logo" />
                    <span>Don't touch</span>
                </a>
                <a href="#" className="applist__item" title="Long long text for testing">
                    <img src={require('../images/bower-logo.png')} alt="site logo" />
                    <span>Long long text for testing</span>
                </a>
                <a href="#" className="applist__item" title="Bison profile">
                    <img src={require('../images/bison.png')} alt="site logo" />
                </a>
                <a href="#" className="applist__item" title="Funny caricatures and something">
                    <img src={require('../images/funny-caricatures.png')} alt="site logo" />
                    <span>Funny caricatures and something</span>
                </a>
                <a href="#" className="applist__item" title="Grunt">
                    <img src={require('../images/grunt-logo.png')} alt="site logo" />
                </a>
                <a href="#" className="applist__item" title="Jade">
                    <img src={require('../images/jade-logo.png')} alt="site logo" />
                </a>
                <a href="#" className="applist__item" title="Less">
                    <img src={require('../images/less-logo.png')} alt="site logo" />
                </a>
                <a href="#" className="applist__item" title="Stilus">
                    <img src={require('../images/Stylus.svg.png')} alt="site logo" />
                </a>
			</div>
		);
	}
}

export default AppList;
 