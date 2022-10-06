import { Button } from "@mui/material";
import { Teacher } from "../../types/teacher";
import { TeacherDescription, TeacherName, TeacherPhoto, TeacherPrice, TeachersListItem, TeachersListStyled, Container, EmptyTeachersList } from "./TeachersList.style";

interface TeacherListProps {
    teachersData: Teacher[],
}

const TeachersList = (props: TeacherListProps) => {
    return (
        <div>
            {props.teachersData.length > 0 ? (
                <TeachersListStyled>
                    {props.teachersData.map(teacher => (
                        <TeachersListItem key={teacher.id}>
                            <TeacherPhoto src="https://github.com/lumamontes.png"></TeacherPhoto>
                            <Container>
                                <TeacherName>{teacher.name}</TeacherName>
                                <TeacherPrice>{teacher.price.toLocaleString('pt-br',{minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por hora</TeacherPrice>
                                <TeacherDescription>{teacher.description}</TeacherDescription>
                                <Button sx={{ width: '70%' }}>Marcar aula com {teacher.name}</Button>
                            </Container>
                        </TeachersListItem>
                    ))
                    }
                </TeachersListStyled>
            ) : (
                <EmptyTeachersList> Nenhum item encontrado! </EmptyTeachersList>
                )   
            }
        </div>
    )
}

export default TeachersList;