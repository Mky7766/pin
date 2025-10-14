'use server';

import { z } from 'zod';
import { generateTitleSuggestions } from '@/ai/flows/generate-title-suggestions';

const FormSchema = z.object({
  content: z.string().min(50, {
    message: 'Blog post must be at least 50 characters.',
  }),
});

export type FormState = {
  message: string;
  suggestions?: string[];
  errors?: {
    content?: string[];
  };
};

export async function generateTitles(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { titleSuggestions } = await generateTitleSuggestions({
      blogPostContent: validatedFields.data.content,
    });

    if (!titleSuggestions || titleSuggestions.length === 0) {
      return { message: 'No suggestions could be generated. Try writing more content.' };
    }

    return {
      message: 'Suggestions generated successfully!',
      suggestions: titleSuggestions,
    };
  } catch (e: any) {
    return {
      message: `An error occurred: ${e.message}`,
    };
  }
}
