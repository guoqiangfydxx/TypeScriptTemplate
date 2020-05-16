import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
test('renders learn react link', function () {
    var getByText = render(React.createElement(App, null)).getByText;
    var linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcHAudGVzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRCxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUM7QUFFeEIsSUFBSSxDQUFDLDBCQUEwQixFQUFFO0lBQ3ZCLElBQUEsNERBQVMsQ0FBcUI7SUFDdEMsSUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQzFDLENBQUMsQ0FBQyxDQUFDIn0=