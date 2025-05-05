import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getALLJob } from "@/lib/actions/getItem";

export default async function Home() {
  const item = await getALLJob();
  console.log(item);

  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-4 mt-8 ">
      {item.map((job, i) => (
        <Jobcard
          key={job._id}
          jobName={job.jobName}
          location={job.location}
          description={job.description}
        />
      ))}
    </div>
  );
}

function Jobcard({jobName,
  location,
  description}) {
  return (
    <Card className={'border-white/10 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer'}>
      <CardHeader>
        <CardTitle className={'text-center'}>{jobName}</CardTitle>
        <CardDescription className={'text-end'}>
          <div className="flex gap-2 items-center justify-end">
          {location}
          {}
            <p className="text-sm text-gray-500">Over 100 people clicked apply</p>
          </div>
          </CardDescription>
      </CardHeader>
      <CardContent >
        <p className="text-pretty line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter className={'flex justify-end gap-4 items-center '}>
        <Button className={'cursor-pointer '}>Apply</Button>
        <Button variant={'secondary'} className={'cursor-pointer '}>Save</Button>
      </CardFooter>
    </Card>
  );
}
