'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Lightbulb, Loader2, Sparkles } from 'lucide-react';
import { generateTitles, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Title Suggestions
        </>
      )}
    </Button>
  );
}

export default function BlogPostCreator() {
  const initialState: FormState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(generateTitles, initialState);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          AI-Powered Blog Post Creator
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Write your blog post below and let our generative AI suggest compelling titles for you.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto shadow-lg">
        <form action={dispatch}>
          <CardHeader>
            <CardTitle>New Blog Post</CardTitle>
            <CardDescription>
              Enter the content of your blog post. The more detailed it is, the better the title suggestions will be.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full gap-2">
              <Label htmlFor="content">Post Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Start writing your masterpiece here..."
                className="min-h-[300px] text-base"
                required
              />
              {state.errors?.content && (
                <p className="text-sm font-medium text-destructive">
                  {state.errors.content.join(', ')}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      {state.suggestions && state.suggestions.length > 0 && (
        <Card className="max-w-4xl mx-auto animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 text-primary" />
              Suggested Titles
            </CardTitle>
            <CardDescription>
              Here are a few ideas to get you started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {state.suggestions.map((title, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-md border p-4 transition-colors hover:bg-accent/50"
                >
                  <Sparkles className="h-5 w-5 shrink-0 text-primary mt-1" />
                  <span className="text-base">{title}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {state.message && !state.suggestions && !state.errors && (
         <Alert className="max-w-4xl mx-auto">
          <AlertTitle>Notification</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
