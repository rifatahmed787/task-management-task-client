"use client";
import { useGetTasksQuery } from "@/Redux/features/tasks/taskApi";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CardSkeleton from "../Skeleton/CardSkeleton";
import { ITask } from "@/Types/task";
import TaskCard from "../UI/TaskCard";

const TaskList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // filter state and effect for update
  const [filter, setFilter] = useState({
    title: searchParams.get("title") || "",
    search: searchParams.get("search") || "",
  });

  useEffect(() => {
    setFilter({
      title: searchParams.get("title") || "",
      search: searchParams.get("search") || "",
    });
  }, [pathname, searchParams]);

  // Get tasks query
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useGetTasksQuery({
    title: filter.title,
    searchTerm: filter.search,
  });

  const tasksList = tasks?.data?.data;
  console.log(tasksList);

  return (
    <div className="bg-[#FAF9F5] min-h-[70vh] px-4 py-20">
      <div className="max-w-[1170px] mx-auto">
        {/* Filter & add book button (if needed) */}
        {/* <FilterBook filter={filter} setFilter={setFilter} /> */}
        {/* Tasks list */}
        {isLoading ? (
          <div className="mt-5 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-10 sm:gap-10">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        ) : (
          <div className="mt-5 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-10 sm:gap-10">
            {!isError &&
              !error &&
              tasksList?.length > 0 &&
              tasksList.map((task: ITask) => (
                <TaskCard key={task._id} task={task} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
