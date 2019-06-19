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
import { not, isNil, compose } from 'ramda';
import { getFirstRun, firstRunDone } from 'redux/modules/walkthrough';
import { getPin } from 'redux/modules/pin';
import Component from './RootScreen.Component';

const mapStateToProps = createStructuredSelector({
  firstRun: getFirstRun,
  hasPin: compose(not, isNil, getPin),
});

const mapDispatchToProps = {
  firstRunDone,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
