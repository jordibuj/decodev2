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

import reducer, { initialState, getApplicationStats } from 'redux/modules/applications';

describe('Application tests', () => {
  test('Default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('Application stats', () => {
    expect(
      getApplicationStats({
        applications: initialState,
      }),
    ).toEqual([
      {
        name: 'dddc',
        title: 'dddcTitle',
        uses: 2,
        certificates: 1,
      },
      {
        name: 'bcnnow',
        title: 'bcnnowTitle',
        uses: 0,
        certificates: 0,
      },
    ]);
  });

  test('Application stats - missing user apps', () => {
    expect(
      getApplicationStats({
        applications: {},
      }),
    ).toEqual([
      {
        name: 'dddc',
        title: 'dddcTitle',
        uses: 0,
        certificates: 0,
      },
      {
        name: 'bcnnow',
        title: 'bcnnowTitle',
        uses: 0,
        certificates: 0,
      },
    ]);
  });

  test('Application stats - extra user apps', () => {
    expect(
      getApplicationStats({
        applications: {
          notSupportedAnymoreApp: {
            uses: 6,
            certificates: 3,
          },
        },
      }),
    ).toEqual([
      {
        name: 'dddc',
        title: 'dddcTitle',
        uses: 0,
        certificates: 0,
      },
      {
        name: 'bcnnow',
        title: 'bcnnowTitle',
        uses: 0,
        certificates: 0,
      },
    ]);
  });
});