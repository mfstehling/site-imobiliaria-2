import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { TextInput } from '../../atoms'
import { Box } from '@chakra-ui/react'

export const Form = ({
  initialValues,
  validationSchema,
  data,
  getValues,
  mb,
  ...props
}) => {
  const {
    handleChange,
    handleBlur,
    values,
    setValues,
    errors,
    isValid,
    validateForm,
  } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
  })
  const checkEmptyFields = (checkData) => {
    const toCheck = checkData || values
    const find = data?.find((v) => {
      toCheck?.[v?.field_type || v?.field || v?.name]?.length <= 0 &&
        !v?.not_required
    })
    if (find) {
      return false
    }
    validateForm()
    return isValid
  }

  useEffect(() => {
    if (initialValues && values !== initialValues) {
      setValues(initialValues)
    }
  }, [initialValues])

  useEffect(() => {
    if (getValues) {
      checkEmptyFields(values === initialValues ? initialValues : null)
      getValues({ params: values, isValid })
    }
  }, [values, isValid])

  return (
    <Box {...props}>
      {data?.map((item, index) => {
        return (
          <Box key={index} mb={mb ? `${mb}px` : '14px'}>
            <TextInput
              {...item}
              {...props}
              value={values?.[item?.name]}
              errors={errors?.[item?.name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
        )
      })}
    </Box>
  )
}
