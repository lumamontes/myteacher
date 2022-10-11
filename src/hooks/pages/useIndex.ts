import { useEffect, useState } from "react";
import { ApiService } from "../../services/ApiService";
import { Teacher } from "../../@types/teacher";

export function useIndex() {
    const [teachers, setTeachersList] = useState<Teacher[]>([])
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [message, setMessage] = useState('');
    useEffect(() => {
        ApiService.get('/teachers/').then((response) => {
            setTeachersList(response.data)
        })
    }, [])

    useEffect(() => {
        setName('');
        setEmail('');
    }, [selectedTeacher])
    function scheduleLesson(){
        if(selectedTeacher !== null){
            if(validateLesson()){
                ApiService.post(`/teachers/${selectedTeacher.id}/lessons`, {
                    name,
                    email
                }).then(() => {
                    setSelectedTeacher(null);
                    setMessage('Cadastrado com sucesso')
                }).catch( (error) => {
                    setMessage(error.response?.data.message)
                })
            }else{
                setMessage('Preencha os dados corretamente')
            }
        }
    }

    function validateLesson(){
        return name.length > 0 && email.length > 0;
    }
    return {
        teachers,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        scheduleLesson,
        message,
        setMessage
    }
}