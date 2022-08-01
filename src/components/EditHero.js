import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useParams, useNavigate } from 'react-router-dom'
import { useFindHeroQuery, useUpdateHeroMutation } from 'redux/hero-reducer'

const validateSchema = Yup.object().shape({
  nickname: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!'),
  real_name: Yup.string().min(2, 'Too Short!').max(40, 'Too Long!'),
  origin_description: Yup.string().min(2, 'Too Short!').max(600, 'Too Long!'),
  superpowers: Yup.string().min(2, 'Too Short!').max(550, 'Too Long!'),
  catch_phrase: Yup.string().min(2, 'Too Short!').max(200, 'Too Long!'),
  images: Yup.string(),
})

export default function EditHero() {
  const navigate = useNavigate()
  const { heroId } = useParams()
  const { data } = useFindHeroQuery(heroId)
  const [updateHero] = useUpdateHeroMutation()
  console.log(data)

  return (
    <>
      {data && (
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
            // if (!values.images) {
            //   values.images =
            //     'https://cdn.pixabay.com/photo/2017/07/19/17/26/gabriel-2519793_960_720.jpg'
            // }
            console.log(values)
            updateHero({ heroId, ...values })
            onSubmitProps.resetForm()
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label>Enter nickname</label>
                <Field
                  name="nickname"
                  type="text"
                  placeholder=" "
                  //   className={css.formInput}
                />
                {errors.nickname && touched.nickname ? (
                  <div>{errors.nickname}</div>
                ) : null}
              </div>
              <div>
                <label>Enter real name</label>
                <Field name="real_name" type="text" placeholder=" " />
                {errors.real_name && touched.real_name ? (
                  <div>{errors.real_name}</div>
                ) : null}
              </div>
              <div>
                <label>Enter origin description</label>
                <Field name="origin_description" type="text" placeholder=" " />
                {errors.origin_description && touched.origin_description ? (
                  <div>{errors.origin_description}</div>
                ) : null}
              </div>
              <div>
                <label>Enter superpowers</label>
                <Field name="superpowers" type="text" placeholder=" " />
                {errors.superpowers && touched.superpowers ? (
                  <div>{errors.superpowers}</div>
                ) : null}
              </div>
              <div>
                <label>Enter catch phrase</label>
                <Field name="catch_phrase" type="text" placeholder=" " />
                {errors.catch_phrase && touched.catch_phrase ? (
                  <div>{errors.catch_phrase}</div>
                ) : null}
              </div>
              <div>
                <label>Enter images</label>
                <Field name="images" type="text" placeholder=" " />
                {errors.images && touched.images ? (
                  <div>{errors.images}</div>
                ) : null}
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      )}
    </>
  )
}
