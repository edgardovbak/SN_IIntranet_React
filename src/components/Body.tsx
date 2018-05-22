import * as React				            from 'react';
import { connect }                          from 'react-redux';
import Sidebar                              from './Sidebar';
import Header                               from './Header';
import {
	Route,
	Redirect,
	Switch,
	withRouter
}                                           from 'react-router-dom';
import { LoginState }                       from '@sensenet/client-core';

import MainLayout                           from './MainLayout';
import MainLayout2                          from './MainLayout2';
import MainLayout3                        	from './MainLayout3';
import Home                                 from './Home';
import User                                 from './User';
import AppList                              from './AppList';

class Body extends React.Component<any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
			open : false,
			openApps: false,
		},

		this.openMenu = this.openMenu.bind(this);
		this.openApps = this.openApps.bind(this);
	}

	openMenu() {
		let menuState = !this.state.open;
		this.setState({         
			open: menuState,
		}); 
	} 

	openApps() {
		let appsState = !this.state.openApps;
		this.setState({         
			openApps: appsState,
		}); 
	} 

	render() {
		const status = this.props.userLoginState !== LoginState.Authenticated;
	
		return (
				<div className={'content_to_right ' + (this.state.open ?  ' open ' : ' ') + (this.state.openApps ?  ' openApps ' : ' ')}>
					<Header openAppList={this.openApps}/>
					<Sidebar openMenu={this.openMenu}/>
					<AppList tabindex={this.state.openApps ?  0 : -1}/>
					<div className="sn_overflow sn_overflow--menu" onClick={this.openMenu} />
					<div className="sn_overflow sn_overflow--apps" onClick={this.openApps} />
					<button className="applist_btn" onClick={this.openApps}>
						<i className="fi flaticon-show-apps-button" />
					</button>
					<main className="sn_main">
						<div className="sn_wrapp">
							<Switch>
								<Route 
									exact={true}
									path="/main_layout_1"  
									render={(routerProps) => {
										return status ?
										<Redirect key="login" to="/login" />
										: <MainLayout {...routerProps} />;
									}} 
								/>
								<Route 
									exact={true}
									path="/main_layout_2"
									render={(routerProps) => {
										return status ?
										<Redirect key="login" to="/login" />
										: <MainLayout2 {...routerProps} />;
									}} 
								/>
								<Route 
									exact={true}
									path="/main_layout_3"  
									render={(routerProps) => {
										return status ?
										<Redirect key="login" to="/login" />
										: <MainLayout3 {...routerProps} />;
									}} 
								/>
								<Route 
									exact={true}
									path={'/user/:' + this.props.userName}
									render={(routerProps) => {
										return status ?
										<Redirect key="login" to="/login" />
										: <User {...routerProps} />;
									}} 
								/>
								<Route 
									path="/"
									component={Home}
								/>    
							</Switch> 
						</div>
					</main>
				</div>
		);
	}
}

const mapStateToProps = (state: any, match: any) => {
	return {
		userName :              state.sensenet.session.user.userName,
		userLoginState: 		state.sensenet.session.loginState, // state.user.user.FullName,
	};
};

export default withRouter(connect(
	mapStateToProps,
)(Body as any));
 