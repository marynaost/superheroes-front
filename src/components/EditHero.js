import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useFindHeroQuery, useUpdateHeroMutation } from 'redux/hero-reducer'

const validateSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long! Must be 20 symbols!'),
  real_name: Yup.string()
    .min(2, 'Too Short!')
    .max(40, 'Too Long! Must be 40 symbols!'),
  origin_description: Yup.string()
    .min(2, 'Too Short!')
    .max(600, 'Too Long! Must be 600 symbols!'),
  superpowers: Yup.string()
    .min(2, 'Too Short!')
    .max(550, 'Too Long! Must be 550 symbols!'),
  catch_phrase: Yup.string()
    .min(2, 'Too Short!')
    .max(200, 'Too Long! Must be 200 symbols!'),
  images: Yup.string(),
})

export default function EditHero() {
  const navigate = useNavigate()
  const { heroId } = useParams()
  const { data } = useFindHeroQuery(heroId)
  const [updateHero] = useUpdateHeroMutation()

  return (
    <>
      {data && (
        <FormikWrap>
          <Wrap>
            <GoBack type="button" onClick={() => navigate('/')}>
              Go back
            </GoBack>
            <Formik
              initialValues={{
                nickname: data.data.nickname,
                real_name: data.data.real_name,
                origin_description: data.data.origin_description,
                superpowers: data.data.superpowers,
                catch_phrase: data.data.catch_phrase,
                images: data.data.images,
              }}
              validationSchema={validateSchema}
              onSubmit={(values, onSubmitProps) => {
                updateHero({ heroId, ...values })
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
      )}
    </>
  )
}

const FormikWrap = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrap = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;

  label {
    color: #000;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .field {
    width: 500px;
    height: 30px;
    border: 1px solid #0e1a33;
    background-color: #b5c6df;
  }
`
const GoBack = styled.button`
  position: absolute;
  top: 10px;
  left: 8px;
  padding: 0;
  width: 80px;
  height: 30px;
  font-weight: 700;
  border-radius: 10%;
  background-color: #2f3c68;
  color: #fff;
  border: 1px solid #000;
  &:hover,
  &:focus {
    background-color: #5b6897;
    cursor: pointer;
  }
`
const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const ErrorMessage = styled.div`
  color: red;
`
const Button = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 70px;
  height: 70px;
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
`
