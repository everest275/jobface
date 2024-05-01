import { z } from 'zod'

export const registerSchema = z.object({
    name: z.string({
        required_error: 'Name es required'
    }),
    email: z.string({
        required_error: 'Email es required'
    }).email(({ message: 'Invalid email' })),

    password: z.string({
        required_error: 'Password is required'
    }).min(6, { message: 'Password must be at least 6 characters' }),

    membership: z.string({
        required_error: 'Membership is required'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email es required'
    }).email(({ message: 'Invalid email' })),
    password: z.string({
        required_error: 'Password is required'
    })
})