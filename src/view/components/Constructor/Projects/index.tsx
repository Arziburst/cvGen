export const eee = '1';
// // Core
// import React, { FC } from 'react';

// // Bus
// import { useExperienceFields } from '../../../../bus/client/experienceFields';
// import { useThemes } from '../../../../bus/client/themes';

// // Styles
// import * as S from './styles';

// // Elements
// import { AddBtn, AppDebounceInput, AppDebounceTextarea, RemoveBtn } from '../../../elements';

// // Types
// import { Project } from '../../../../bus/client/experienceFields/types';

// type propTypes = {
//     projects: Array<Project>
//     experienceId: string;
// }

// export const ConstructorProjects: FC<propTypes> = ({ projects, experienceId }) => {
//     const {
//         handleSetProjectCustomerField,
//         handleSetProjectDurationField, handleSetProjectNameField,
//         handleSetProjectResponsibilitiesField, handleSetProjectRoleField,
//         handleSetProjectStackField, handleSetProjectTeamsizeField,
//         addExperienceProjectField, removeExperienceProjectField,
//     } = useExperienceFields();

//     const { themes } = useThemes();

//     return (
//         <S.Container>
//             <S.TitleBox>
//                 <S.Title>
//                     Projects
//                 </S.Title>
//                 <AddBtn handleAddFunc = { () => addExperienceProjectField(experienceId) } />
//             </S.TitleBox>
//             <S.List>
//                 {projects.map((project) => {
//                     const {
//                         customer, duration, name, id,
//                         responsibilities, role, stack, teamSize,
//                     } = project;

//                     return (
//                         <S.Item key = { id }>
//                             <S.Wrapper>
//                                 <S.Name>
//                                     <AppDebounceInput
//                                         decorElemColor = { themes.accent.bgSecond }
//                                         handleChangeFunc = { (event) => {
//                                             handleSetProjectNameField({ id, text: event.target.value });
//                                         } }
//                                         placeholder = 'Name'
//                                         value = { name }
//                                     />
//                                 </S.Name>
//                                 <S.Customer>
//                                     <AppDebounceInput
//                                         decorElemColor = { themes.accent.bgSecond }
//                                         handleChangeFunc = { (event) => {
//                                             handleSetProjectCustomerField({ id, text: event.target.value });
//                                         } }
//                                         placeholder = 'Customer'
//                                         value = { customer }
//                                     />
//                                 </S.Customer>
//                                 <S.Box>
//                                     <S.Role>
//                                         <AppDebounceInput
//                                             decorElemColor = { themes.accent.bgSecond }
//                                             handleChangeFunc = { (event) => {
//                                                 handleSetProjectRoleField({ id, text: event.target.value });
//                                             } }
//                                             placeholder = 'Role'
//                                             value = { role }
//                                         />
//                                     </S.Role>
//                                     <S.Duration>
//                                         <AppDebounceInput
//                                             decorElemColor = { themes.accent.bgSecond }
//                                             handleChangeFunc = { (event) => {
//                                                 handleSetProjectDurationField(
//                                                     { id, text: event.target.value },
//                                                 );
//                                             } }
//                                             placeholder = 'Duration'
//                                             value = { duration }
//                                         />
//                                     </S.Duration>
//                                 </S.Box>
//                                 <S.Responsibilities>
//                                     <AppDebounceTextarea
//                                         decorElemColor = { themes.accent.bgSecond }
//                                         handleChangeFunc = { (event) => {
//                                             handleSetProjectResponsibilitiesField(
//                                                 { id, text: event.target.value },
//                                             );
//                                         } }
//                                         placeholder = 'Responsibilities'
//                                         value = { responsibilities }
//                                     />
//                                 </S.Responsibilities>
//                                 <S.TeamSize>
//                                     <AppDebounceInput
//                                         decorElemColor = { themes.accent.bgSecond }
//                                         handleChangeFunc = { (event) => {
//                                             handleSetProjectTeamsizeField({ id, text: event.target.value });
//                                         } }
//                                         placeholder = 'Teamsize'
//                                         value = { teamSize }
//                                     />
//                                 </S.TeamSize>
//                                 <S.Stack>
//                                     <AppDebounceInput
//                                         decorElemColor = { themes.accent.bgSecond }
//                                         handleChangeFunc = { (event) => {
//                                             handleSetProjectStackField({ id, text: event.target.value });
//                                         } }
//                                         placeholder = 'Stack'
//                                         value = { stack }
//                                     />
//                                 </S.Stack>
//                             </S.Wrapper>
//                             <RemoveBtn handleRemoveFunc = { () => removeExperienceProjectField(id) } />
//                         </S.Item>
//                     );
//                 })
//                 }
//             </S.List>
//         </S.Container>
//     );
// };
