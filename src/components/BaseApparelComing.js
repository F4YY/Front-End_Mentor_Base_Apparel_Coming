import React from 'react';
import {Container} from './styled/Container.styled'
import {
  Attribution,
    AttributionA,
    BaseApparel,
    ButtonNext,
    FooterApparel,
    HeroApparel,
    IconError,
    ImageApparel,
    InputboxEmail,
    InputWrapper,
    LogoApparel,
    Styledform,
} from './styled/Baseapparel.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import arrow from './images/icon-arrow.svg';
import iconerror from './images/icon-error.svg';

export const BaseApparelComing = () => {
  const formik = useFormik({
    initialValues:{
      email:''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Please provide a valid email address').required('Email cannot be empty')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values,null,2))
    }
  })

  return (
    <Container>
        <BaseApparel>
        <LogoApparel/>
        <HeroApparel>
          <h1>
            We're <span>coming soon</span>
          </h1>
          <h2>
            Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our launch deals.
          </h2>
          <Styledform onSubmit={formik.handleSubmit}>
            <InputWrapper>
              <InputboxEmail
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                style={formik.errors.email && formik.touched.email && {
                  color: 'var(--Soft-Red)',
                  borderColor: 'var(--Soft-Red)',
                  borderWidth: '2px',
                }}
              />
                {formik.touched.email && formik.errors.email ?
                (<h3><em>{formik.errors.email}</em></h3>) : null}
                {formik.touched.email && formik.errors.email ?
                (<IconError src={iconerror} alt='iconerror'/>) : null}
              <ButtonNext>
                <img src={arrow} alt='arrow'/>
              </ButtonNext>
            </InputWrapper>
          </Styledform>
        </HeroApparel>
        <ImageApparel/>
        <FooterApparel>
          <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0/" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Base Apparel Coming.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
          </footer>
        </FooterApparel>
      </BaseApparel>
    </Container>
  )
}
