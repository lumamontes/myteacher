import { Box } from '@mui/material'
import type { NextPage } from 'next'
import TeachersList from '../src/components/TeachersList.tsx'
import { Teacher } from '../src/types/teacher'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const teachers: Teacher[]= [
    {
      id:1,
      name: 'Professor 1',
      photo: 'https://github.com/lumamontes.png',
      description: "Descricao 1",
      price: 100
    },
    {
      id:2,
      name: 'Professor 2',
      photo: 'https://github.com/lumamontes.png',
      description: "Descricao 2",
      price: 100
    },
    {
      id:3,
      name: 'Professor 3',
      photo: 'https://github.com/lumamontes.png',
      description: "Descricao 3",
      price: 100
    },
  ]
  return (
    <Box sx={{  backgroundColor: 'secondary.main' }}>
      <TeachersList teachersData={teachers} />
    </Box>
  )
}

export default Home
