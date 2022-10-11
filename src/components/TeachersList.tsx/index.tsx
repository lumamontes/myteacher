import { Button } from "@mui/material";
import { FormatService } from "../../services/FormatService";
import { Teacher } from "../../@types/teacher";
import { TeacherDescription, TeacherName, TeacherPhoto, TeacherPrice, TeachersListItem, TeachersListStyled, Container, EmptyTeachersList } from "./TeachersList.style";

interface TeacherListProps {
    teachersData: Teacher[],
    onSelect: (teacher: Teacher) => void
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
                                <TeacherPrice>{ FormatService.monetaryValue(teacher.price)} por hora</TeacherPrice>
                                <TeacherDescription>{FormatService.limitText(teacher.description, 50)}</TeacherDescription>
                                <Button onClick={() => props.onSelect(teacher)} sx={{ width: '70%' }}>Marcar aula com {teacher.name}</Button>
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