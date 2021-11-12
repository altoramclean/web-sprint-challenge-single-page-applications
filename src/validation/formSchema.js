import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required.')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['S', 'M', 'L', 'XL'], 'Size is required'),

    sauce: yup
        .string()
        .oneOf(['Original Tomato', 'Pesto', 'Regular Alfredo'], 'Sauce is required'),

    instructions: yup.string(),
    Pepperoni: yup.boolean(),
    Chicken: yup.boolean(),
    Mushrooms: yup.boolean(),
    ExtraCheese: yup.boolean()


})

export default formSchema;