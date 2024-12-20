import * as React from 'react';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from 'bootstrap';
import i1 from '../assets/cart/i1.webp';
import i2 from '../assets/cart/i2.jpeg'
import i3 from '../assets/cart/i3.jpeg'
import i4 from '../assets/cart/i4.jpeg'
import i5 from '../assets/cart/i5.jpeg'
import i6 from '../assets/cart/i6.jpeg'
import i7 from '../assets/cart/i7.jpeg'
import i8 from '../assets/cart/i8.jpeg'
import i9 from '../assets/cart/i9.jpeg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Checkup() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <center><h1 style={{ fontSize: '40px' }}>Regular Checkups</h1></center>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <h1>Annual Physical Examination: </h1>
            <Link to="/checkup"> {/* Link to Checkup component */}
              <img src={i1} alt='img' width={'70%'} height={'70%'} display={'flex'}/>
            </Link>
            <p>Your doctor can use a range of examination techniques including tapping your abdomen to detect liver size and presence of abdominal fluid, listening for bowel sounds with a stethoscope, and palpating for tenderness. Neurological exam. Nerves, muscle strength, reflexes, balance, and mental state may be assessed.</p>
          </Item>
        </Grid>


          <Grid item xs={2} sm={4} md={4}>
            
            <Item>
                <h1>Dental Checkups: </h1>
            <img src={i2} alt='image2' width={'70%'} height={'70%'} />
           <p>Usually, the dentist will start by cleaning the teeth and perhaps doing X-rays. The cleaning involves removing the plaque and tartar using specific dental tools. That gets rid of the bacteria in the mouth and stops it from building up. Next, the patient has the teeth flossed and gently brushed.</p>
           
            </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>
                <h1>Eye Exams</h1>
            <img src={i3} alt='image3' width={'70%'} height={'100%'} />
          
           <p>A full eye examination consists of an external examination, followed by specific tests for visual acuity, pupil function, extraocular muscle motility, visual fields, intraocular pressure and ophthalmoscopy through a dilated pupil.</p>
              </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>
                <h1>Blood Pressure Checks:</h1>
            <img src={i4} alt='image4' width={'60%'} height={'60%'} />
           <p>The cuff is inflated with a small hand pump. As the cuff inflates, it squeezes the arm. Blood flow through the artery stops for a moment. The health care provider opens a valve on the hand pump to slowly release the air in the cuff and restore blood flow.</p>
              </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>
                <h1>Cholesterol Screening:</h1>
            <img src={i5} alt='image5' width={'70%'} height={'70%'} />
            <p>A cholesterol test is a blood test, usually done in the morning if you fast overnight. Blood is drawn from a vein, usually from your arm.</p>
              </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>
                <h1>Cancer Screening: </h1>
            <img src={i6} alt='image6' width={'70%'} height={'70%'} />
            <p>Cancer screening is looking for cancer before a person has any symptoms. Screening tests can help find cancer at an early stage, before symptoms appear. When abnormal tissue or cancer is found early, it may be easier to treat or cure. By the time symptoms appear, the cancer may have grown and spread.</p>
              </Item>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Item>
                <h1>Bone Density Test:</h1>
            <img src={i7} alt='image7' width={'70%'} height={'70%'} />
           <p>A bone density scan, also known as a DEXA scan, is a type of low-dose x-ray test that measures calcium and other minerals in your bones. The measurement helps show the strength and thickness (known as bone density or mass) of your bones.</p>
            
              </Item>
          </Grid>

          
          <Grid item xs={2} sm={4} md={4}>
            <Item>
                <h1>Skin Exams:</h1>
            <img src={i8} alt='image8' width={'70%'} height={'70%'} />
            <p>It describes the three layers of the skin, glands and appendages. Assessment involves health history questions, physical exam of lesions/rashes, nail changes, hair characteristics, and diagnostic tests like biopsy. Common disorders are often found in specific anatomical areas like the face, scalp, or genital regions.</p>
             
              </Item>
          </Grid>

          
          <Grid item xs={2} sm={4} md={4}>
            <Item>
                <h1>Mental Health Checkup:</h1>
            <img src={i9} alt='image9' width={'70%'} height={'200px'} />
            <p>A mental health assessment often includes a physical examination. Your doctor will look at your past medical history and the medicines you are currently taking. You will also be asked about any history of mental illness or mental disorders in your family.</p>
             </Item>
          </Grid>
 
           </Grid>
    </Box>
  );
}

