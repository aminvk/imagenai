import React from 'react'
import { auth } from '@clerk/nextjs/server';
import Header from '@/components/shared/Header';
import { getUserById } from '@/lib/actions/user.action';
import { transformationTypes } from '@/constants';
import { redirect } from 'next/navigation';
import TransformationForm from '@/components/shared/TransformationForm';
;


const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes [type];

  if(!userId) redirect ('/signIn');

  const user = await getUserById(userId);
  

  

  

  return (
    <>
      <Header 
       title={transformation.title} 
       subtitle={transformation.subTitle}   
      />
    
     <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage
