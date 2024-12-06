// import { useMemo, useEffect } from "react";

// import { useCategoryStore } from "@/store/categoryStore";

// import { CalendarSchedule } from "@/models/CalendarSchedule";
// import { CalendarTodo } from "@/models/CalendarTodo";
// import { MainSchedule } from "@/models/MainSchedule";
// import { MainTodo } from "@/models/MainTodo";
// import {
//   Category,
//   PersonalSchedule,
//   PersonalTodo,
//   PersonalGroupSchedule,
//   PersonalGroupTodo,
// } from "@/types";
// import { getCategoryColor } from "@/utils/mainPage/getCategoryColor";

// import {
//   useCategories,
//   useGroups,
//   usePersonalSchedules,
//   usePersonalTodos,
//   usePersonalGroupSchedules,
//   usePersonalGroupTodos,
// } from "./queries";

// /**
//  * TODO:
//  * 날짜, 카테고리 필터링 로직
//  * 여기서 처리하고 보내줄지, 메인페이지 내부에서 처리할지
//  */
// export function useMainPage() {
//   const setCategories = useCategoryStore((state) => state.setCategories);
//   const categoriesInStore = useCategoryStore((state) => state.categories);

//   const {
//     data: categories = [] as Category[],
//     isLoading: isCategoriesLoading,
//     error: categoriesError,
//   } = useCategories();

//   useEffect(() => {
//     if (!categoriesInStore.length) {
//       const categoriesWithSelection = categories.map((category) => ({
//         ...category,
//         isSelected: true,
//       }));
//       setCategories(categoriesWithSelection);
//     }
//   }, [categories, categoriesInStore, setCategories]);

//   const categoryColorMap = useMemo(
//     () =>
//       categories.reduce(
//         (acc, category) => ({ ...acc, [category.categoryId]: category.color }),
//         {}
//       ),
//     [categories]
//   );

//   const {
//     data: groups = [],
//     isLoading: isGroupsLoading,
//     error: groupsError,
//   } = useGroups();

//   const {
//     data: personalSchedules = [] as PersonalSchedule[],
//     isLoading: isPersonalSchedulesLoading,
//     error: personalSchedulesError,
//   } = usePersonalSchedules();
//   const {
//     data: personalTodos = [] as PersonalTodo[],
//     isLoading: isPersonalTodosLoading,
//     error: personalTodosError,
//   } = usePersonalTodos();
//   const {
//     data: personalGroupSchedules = [] as PersonalGroupSchedule[],
//     isLoading: isPersonalGroupSchedulesLoading,
//     error: personalGroupSchedulesError,
//   } = usePersonalGroupSchedules();
//   const {
//     data: personalGroupTodos = [] as PersonalGroupTodo[],
//     isLoading: isPersonalGroupTodosLoading,
//     error: personalGroupTodosError,
//   } = usePersonalGroupTodos();

//   const schedules = useMemo(
//     () => [...personalSchedules, ...personalGroupSchedules],
//     [categories, groups, personalSchedules, personalGroupSchedules]
//   );
//   const todos = useMemo(
//     () => [...personalTodos, ...personalGroupTodos],
//     [categories, groups, personalTodos, personalGroupTodos]
//   );

//   // 달력용 데이터
//   const calendarSchedules = useMemo(
//     () =>
//       schedules.map((schedule) => {
//         const calendarSchedule = new CalendarSchedule(schedule);
//         calendarSchedule.color = getCategoryColor(
//           schedule.categoryId,
//           categoryColorMap
//         );

//         return calendarSchedule;
//       }),
//     [schedules, categories]
//   );
//   const calendarTodos = useMemo(
//     () => todos.map((todo) => new CalendarTodo(todo)),
//     [todos]
//   );

//   // 리스트용 데이터
//   const listSchedules = useMemo(
//     () =>
//       schedules.map((schedule) => {
//         const mainSchedule = new MainSchedule(schedule);
//         mainSchedule.color = getCategoryColor(
//           schedule.categoryId,
//           categoryColorMap
//         );

//         return mainSchedule;
//       }),
//     [schedules, categories]
//   );
//   const listTodos = useMemo(
//     () =>
//       todos.map((todo) => {
//         const mainTodo = new MainTodo(todo);
//         mainTodo.color = getCategoryColor(todo.categoryId, categoryColorMap);

//         return mainTodo;
//       }),
//     [todos, categories]
//   );

//   /**
//    * Groups 넘겨줘야하는지 확인
//    */
//   return {
//     data: {
//       categories,
//       groups,
//       calendar: {
//         schedules: calendarSchedules,
//         todos: calendarTodos,
//       },
//       list: {
//         schedules: listSchedules,
//         todos: listTodos,
//       },
//     },
//     isLoading:
//       isCategoriesLoading ||
//       isGroupsLoading ||
//       isPersonalSchedulesLoading ||
//       isPersonalTodosLoading ||
//       isPersonalGroupSchedulesLoading ||
//       isPersonalGroupTodosLoading,
//     error:
//       categoriesError ||
//       groupsError ||
//       personalSchedulesError ||
//       personalTodosError ||
//       personalGroupSchedulesError ||
//       personalGroupTodosError,
//   };
// }

export const useMainPage = () => {
  return {
    data: {
      categories: [],
      groups: [],
      calendar: { schedules: [], todos: [] },
      list: { schedules: [], todos: [] },
    },
    isLoading: false,
    error: true,
  };
};
