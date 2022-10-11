import { Box, Button, Dialog, DialogActions, Grid, TextField, Snackbar } from '@mui/material'
import type { NextPage } from 'next'
import { setEnvironmentData } from 'worker_threads'
import TeachersList from '../src/components/TeachersList.tsx'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { teachers, name, setName, email, setEmail, selectedTeacher, setSelectedTeacher, scheduleLesson, message, setMessage } = useIndex();
  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <TeachersList teachersData={teachers} onSelect={(teacher) => setSelectedTeacher(teacher)} />
      </Box>
      <Dialog onClose={() => setSelectedTeacher(null)} open={selectedTeacher !== null ? true : false}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Digite seu nome"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Digite seu melhor email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setSelectedTeacher(null)}>Cancelar</Button>
          <Button onClick={() => scheduleLesson()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar message={message} open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />
    </div>

  )
}

export default Home
