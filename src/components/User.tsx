import * as React							from 'react';
import { connect }                          from 'react-redux';

class User extends React.Component<any, any> {
    public render() {

		return (
			<div>
				<h1>User Info</h1>
				<h2>{this.props.user.fullName}</h2>
			</div>
		);
	}
}

const mapStateToProps = (state: any, match: any) => {
	return {
		user :              state.sensenet.session.user
	};
};

export default connect(
	mapStateToProps,
)(User as any);
 