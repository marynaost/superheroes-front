import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { useAddHeroMutation } from 'redux/hero-reducer'

const validateSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long! Must be 20 symbols!')
    .required('Required'),
  real_name: Yup.string()
    .min(2, 'Too Short!')
    .max(40, 'Too Long! Must be 40 symbols!')
    .required('Required'),
  origin_description: Yup.string()
    .min(2, 'Too Short!')
    .max(600, 'Too Long!Must be 600 symbols!')
    .required('Required'),
  superpowers: Yup.string()
    .min(2, 'Too Short!')
    .max(550, 'Too Long! Must be 550 symbols!')
    .required('Required'),
  catch_phrase: Yup.string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long! Must be 200 symbols!')
    .required('Required'),
  images: Yup.string(),
})

export default function AddNewHero(params) {
  const [addHero] = useAddHeroMutation()
  const navigate = useNavigate()

  return (
    <FormikWrap>
      <Wrap>
        <Formik
          initialValues={{
            nickname: '',
            real_name: '',
            origin_description: '',
            superpowers: '',
            catch_phrase: '',
            images: '',
          }}
          validationSchema={validateSchema}
          onSubmit={(values, onSubmitProps) => {
            if (!values.images) {
              values.images =
                'https://cdn.pixabay.com/photo/2017/07/19/17/26/gabriel-2519793_960_720.jpg'
            }
            addHero(values)
            onSubmitProps.resetForm()
            navigate('/')
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FieldWrap>
                <label>Nickname</label>
                <Field
                  className="field"
                  name="nickname"
                  type="text"
                  placeholder=" "
                />
                {errors.nickname && touched.nickname ? (
                  <ErrorMessage>{errors.nickname}</ErrorMessage>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <label>Real name</label>
                <Field
                  className="field"
                  name="real_name"
                  type="text"
                  placeholder=" "
                />
                {errors.real_name && touched.real_name ? (
                  <ErrorMessage>{errors.real_name}</ErrorMessage>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <label>Description</label>
                <Field
                  className="field"
                  name="origin_description"
                  type="text"
                  placeholder=" "
                />
                {errors.origin_description && touched.origin_description ? (
                  <ErrorMessage>{errors.origin_description}</ErrorMessage>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <label>Superpowers</label>
                <Field
                  className="field"
                  name="superpowers"
                  type="text"
                  placeholder=" "
                />
                {errors.superpowers && touched.superpowers ? (
                  <ErrorMessage>{errors.superpowers}</ErrorMessage>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <label>Catch phrase</label>
                <Field
                  className="field"
                  name="catch_phrase"
                  type="text"
                  placeholder=" "
                />
                {errors.catch_phrase && touched.catch_phrase ? (
                  <ErrorMessage>{errors.catch_phrase}</ErrorMessage>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <label>Images (not required)</label>
                <Field
                  className="field"
                  name="images"
                  type="text"
                  placeholder=" "
                  title="the image must be a url link"
                />
                {errors.images && touched.images ? (
                  <ErrorMessage>{errors.images}</ErrorMessage>
                ) : null}
              </FieldWrap>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </Wrap>
    </FormikWrap>
  )
}

const FormikWrap = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrap = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;

  @media screen and (min-width: 768px) {
    width: 700px;
    height: 530px;
  }
  @media screen and (min-width: 1200px) {
    width: 800px;
    height: 600px;
  }

  label {
    color: #000;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .field {
    width: 280px;
    height: 30px;
    border: 1px solid #0e1a33;
    background-color: #b5c6df;
    @media screen and (min-width: 768px) {
      width: 500px;
    }
  }
`
const FieldWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const ErrorMessage = styled.div`
  color: red;
  position: absolute;
  bottom: -14px;
  font-size: 11px;
`
const Button = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50px;
  height: 50px;
  font-size: 11px;
  padding: 0;
  font-weight: 700;
  border-radius: 50%;
  color: #fff;
  background-color: #2f3c68;
  border: 1px solid #000;
  cursor: pointer;
  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: pulse 2s infinite;
  &:hover,
  &:focus {
    background-color: #5b6897;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(47, 60, 104, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(47, 60, 104, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(47, 60, 104, 0);
    }
  }
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) {
    width: 70px;
    height: 70px;
  }
`
