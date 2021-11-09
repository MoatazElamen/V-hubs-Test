import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {useSelector} from 'react-redux';
function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
    const {language} = useSelector((state)=>({language:state.languageReducer.lang}))
  return (
    <React.Fragment>
      <Title>{language ==='en'? 'Recent Deposits' :'المقدمات الحديثة'}</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          {language ==='en' ? 'View balance' :'عرض الحساب'}
        </Link>
      </div>
    </React.Fragment>
  );
}