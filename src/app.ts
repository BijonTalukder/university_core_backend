import cors from 'cors'
import express, { Application } from 'express'
import cookieParser from 'cookie-parser'
import router from './routes'
const app:Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/api/v1',router)

export default app