import { styled } from "@mui/material";

export const TeachersListStyled = styled('ul')`
width: 100%;
max-width: 900px;
margin: 0 auto;
padding:  ${({ theme }) => theme.spacing(10, 2, 10, 2)};
   
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: ${({ theme }) => theme.spacing(9)};

   ${({ theme }) => theme.breakpoints.down('md')}{
       grid-template-columns: 1fr;
       gap: ${({ theme }) => theme.spacing(8)};
   };
`;
export const EmptyTeachersList = styled('h2')`
text-align: center;
padding: ${({ theme }) => theme.spacing(20,0)};
`;

export const TeachersListItem = styled('li')`
list-style: none;
    
`;

export const TeacherPhoto = styled('img')`
width: 100%;
    
`;
export const Container = styled('div')`
    
`;

export const TeacherName = styled('h3')`
margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)}
`;

export const TeacherPrice = styled('p')`
margin: 0;
font-weight: bold;
color: ${({ theme }) => theme.palette.primary.main}
    
`;

export const TeacherDescription = styled('p')`
    word-break: break-wordTeachersListStyled;
`;