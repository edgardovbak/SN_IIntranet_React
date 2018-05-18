import * as React				from 'react';

class Header extends React.Component<any, any> {
	public render () {
		return (
			<header className="sn_header">
				<div className="sn_wrapp">
					<div className="sn_header__search">
						<input type="text" />
						<button>
							<i className="fi flaticon-magnifier" />
						</button>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
