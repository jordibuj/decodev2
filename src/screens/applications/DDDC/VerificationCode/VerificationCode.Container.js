/*
 * DECODE App – A mobile app to control your personal data
 *
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: info@dribia.com
 */

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getVerification, updateVerificationCode } from 'redux/modules/applications/dddc';
import Component from './VerificationCode.Component';

const mapStateToProps = createStructuredSelector({
  verification: getVerification,
});

const mapDispatchToProps = dispatch => ({
  updateVerification: (id, value) => dispatch(updateVerificationCode(id, value)),
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export default ConnectedComponent;
