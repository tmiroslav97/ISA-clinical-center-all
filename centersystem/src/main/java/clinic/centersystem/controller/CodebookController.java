package clinic.centersystem.controller;

import clinic.centersystem.model.Codebook;
import clinic.centersystem.service.CodebookServiceCont;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/med-diag", produces = MediaType.APPLICATION_JSON_VALUE)
public class CodebookController {

    private final CodebookServiceCont codebookServiceCont;

    public CodebookController(CodebookServiceCont codebookServiceCont) {
        this.codebookServiceCont = codebookServiceCont;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Codebook>> getCodebook() {
        List<Codebook> codebooks = this.codebookServiceCont.getAll();
        return new ResponseEntity<>(codebooks, HttpStatus.OK);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<?> addCodebook(@RequestBody Codebook codebook) {
        this.codebookServiceCont.add(codebook);
        return new ResponseEntity<>("Code successfuly added", HttpStatus.OK);
    }
}
