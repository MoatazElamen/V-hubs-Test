import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import {useSelector} from 'react-redux'
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const {language} = useSelector((state)=>({language:state.languageReducer.lang}))
  return (
    <React.Fragment>
      <Title> {language ==='en' ? 'Recent Orders':'احدث الطلبات'}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{language === 'en' ? 'Date' :'التاريخ'}</TableCell>
            <TableCell>{language === 'en' ? 'Name' :'الاسم'}</TableCell>
            <TableCell>{language === 'en' ? 'Ship To' :'الوجهة'}</TableCell>
            <TableCell>{language === 'en' ? 'Payment Method' : 'طريقة الدفع'}</TableCell>
            <TableCell align="right">{language === 'en' ? 'Sale Amount':'نسبة الخصم'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        {language === 'en' ? 'See more orders' :'عرض المزيد من الطلبات'}
      </Link>
    </React.Fragment>
  );
}