import * as React				from 'react';

interface Props {
	openAppList: Function;
}

class Header extends React.Component<any, any> {
	constructor(prop: Props) {
		super(prop);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler = () => {
		this.props.openAppList();
	}

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
