// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import Adapter from '@zarconontol/enzyme-adapter-react-18';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

// configure({ adapter: new Adapter() });